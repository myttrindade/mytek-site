"""Troca o logo antigo do video do dashboard Power BI pelo logo atual."""
import subprocess
import numpy as np
from PIL import Image, ImageDraw

SRC = r"C:\Users\maith\portfolio-repo\prints\performance-comercial-demo.mp4"
OUT = r"C:\Users\maith\AppData\Local\Temp\claude\C--Users-maith\13ff4a5c-8bc0-4aa6-b879-c81695ba9862\scratchpad\pbi_new.mp4"
W, H = 960, 540
FPS = subprocess.run(
    ["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=r_frame_rate",
     "-of", "default=nw=1:nk=1", SRC], capture_output=True, text=True).stdout.strip()

POLYS = [
    "14.00,51.00 50.60,77.00 50.60,124.00 42.00,115.50 42.00,99.00 31.50,92.00 38.50,87.00 42.00,88.50 42.00,84.00 24.50,71.50 24.50,114.50 14.00,121.50",
    "93.00,51.00 56.40,77.00 56.40,124.00 65.00,115.50 65.00,99.00 75.50,92.00 68.50,87.00 65.00,88.50 65.00,84.00 82.50,71.50 82.50,114.50 93.00,121.50",
]
PURPLE = (0x5E, 0x34, 0xF7)

def avatar(size, radius_frac=0.24):
    S = size * 8
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * radius_frac), fill=PURPLE + (255,))
    k = (S / 1080) * 5.8
    ox, oy = S / 2 - 53.5 * k, S / 2 - 87.5 * k
    for poly in POLYS:
        pts = [tuple(float(v) for v in p.split(",")) for p in poly.split()]
        d.polygon([(ox + x * k, oy + y * k) for x, y in pts], fill=(255, 255, 255, 255))
    return img.resize((size, size), Image.LANCZOS)

def paste(frame, av, x, y):
    a = np.asarray(av, dtype=np.float32)
    h, w = a.shape[:2]
    alpha = a[..., 3:4] / 255.0
    region = frame[y:y + h, x:x + w].astype(np.float32)
    frame[y:y + h, x:x + w] = (region * (1 - alpha) + a[..., :3] * alpha).astype(np.uint8)

SIDE = avatar(54)
COVER = avatar(32)

dec = subprocess.Popen(["ffmpeg", "-v", "error", "-i", SRC, "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
                       stdout=subprocess.PIPE)
enc = subprocess.Popen(
    ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
     "-r", FPS, "-i", "-", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "22",
     "-pix_fmt", "yuv420p", "-movflags", "+faststart", OUT],
    stdin=subprocess.PIPE)

n = 0
size = W * H * 3
while True:
    buf = dec.stdout.read(size)
    if len(buf) < size:
        break
    fr = np.frombuffer(buf, dtype=np.uint8).reshape(H, W, 3).copy()
    side_med = np.median(fr[300:540, 5:140].reshape(-1, 3), axis=0)
    if side_med[0] < 40:                      # barra lateral escura do dashboard
        # apaga o logo antigo com o fundo da propria barra, linha a linha
        for y in range(2, 68):
            fr[y, 18:136] = np.median(fr[y, 6:12], axis=0).astype(np.uint8)
        paste(fr, SIDE, 48, 8)
    else:                                     # capa: logo pequeno no canto inferior direito
        paste(fr, COVER, 910, 495)
    enc.stdin.write(fr.tobytes())
    n += 1
enc.stdin.close()
enc.wait()
print("frames:", n, "fps:", FPS)
