"""Troca o logo antigo do video do Hub pelo logo atual (simbolo branco em quadrado roxo)."""
import subprocess, sys
import numpy as np
from PIL import Image, ImageDraw

SRC = r"C:\Users\maith\portfolio-repo\prints\mytek-hub-demo.mp4"
OUT = r"C:\Users\maith\AppData\Local\Temp\claude\C--Users-maith\13ff4a5c-8bc0-4aa6-b879-c81695ba9862\scratchpad\hub_new.mp4"
W, H, FPS = 1280, 800, 25

POLYS = [
    "14.00,51.00 50.60,77.00 50.60,124.00 42.00,115.50 42.00,99.00 31.50,92.00 38.50,87.00 42.00,88.50 42.00,84.00 24.50,71.50 24.50,114.50 14.00,121.50",
    "93.00,51.00 56.40,77.00 56.40,124.00 65.00,115.50 65.00,99.00 75.50,92.00 68.50,87.00 65.00,88.50 65.00,84.00 82.50,71.50 82.50,114.50 93.00,121.50",
]
PURPLE = (0x5E, 0x34, 0xF7)

def avatar(size, bg=None, radius_frac=0.24):
    """Quadrado roxo arredondado com o simbolo branco, proporcao do avatar do Instagram
    (simbolo com 42% da largura). `bg` e a cor do fundo para os cantos."""
    S = size * 8
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * radius_frac), fill=PURPLE + (255,))
    k = (S / 1080) * 5.8  # mesma escala do avatar de 1080 px
    ox, oy = S / 2 - 53.5 * k, S / 2 - 87.5 * k
    for poly in POLYS:
        pts = [tuple(float(v) for v in p.split(",")) for p in poly.split()]
        d.polygon([(ox + x * k, oy + y * k) for x, y in pts], fill=(255, 255, 255, 255))
    return img.resize((size, size), Image.LANCZOS)

def paste(frame, av, x, y, dim):
    """Cola o avatar no frame (array HxWx3), escurecendo por `dim` (1 = normal)."""
    a = np.asarray(av, dtype=np.float32)
    h, w = a.shape[:2]
    alpha = a[..., 3:4] / 255.0
    region = frame[y:y + h, x:x + w].astype(np.float32)
    rgb = a[..., :3] * dim
    frame[y:y + h, x:x + w] = (region * (1 - alpha) + rgb * alpha).astype(np.uint8)

SIDE = avatar(46)    # barra lateral: 46 px, cobre o quadrado branco antigo (40 px)
LOGIN = avatar(30)   # cartao de login (fundo branco)
SIDE_POS = (17, 17)
LOGIN_POS = (480, 222)

dec = subprocess.Popen(
    ["ffmpeg", "-v", "error", "-i", SRC, "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
    stdout=subprocess.PIPE,
)
enc = subprocess.Popen(
    ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
     "-r", str(FPS), "-i", "-", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "22",
     "-pix_fmt", "yuv420p", "-movflags", "+faststart", OUT],
    stdin=subprocess.PIPE,
)

n = 0
size = W * H * 3
REF = 211.0  # brilho do logo antigo na barra lateral, sem escurecimento
while True:
    buf = dec.stdout.read(size)
    if len(buf) < size:
        break
    fr = np.frombuffer(buf, dtype=np.uint8).reshape(H, W, 3).copy()
    probe = fr[20:60, 20:60].mean()           # quadrado do logo na barra lateral
    if probe < 60:                            # tela de login (sem barra lateral)
        paste(fr, LOGIN, *LOGIN_POS, 1.0)
    else:
        dim = float(min(1.0, probe / REF))    # acompanha o escurecimento da janela
        paste(fr, SIDE, *SIDE_POS, dim)
    enc.stdin.write(fr.tobytes())
    n += 1
enc.stdin.close()
enc.wait()
print("frames:", n)
