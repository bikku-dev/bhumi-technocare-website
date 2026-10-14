import os
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ASSETS_DIR = r"public\assets"
ENHANCED_DIR = os.path.join(ASSETS_DIR, "enhanced")
os.makedirs(ENHANCED_DIR, exist_ok=True)

results = []

def record(orig_name, enh_name, category, orig_dims, enh_dims, enhancement_desc, section, confidence):
    results.append({
        "original_name": orig_name,
        "enhanced_name": enh_name,
        "category": category,
        "orig_dims": f"{orig_dims[0]}x{orig_dims[1]}",
        "enh_dims": f"{enh_dims[0]}x{enh_dims[1]}",
        "enhancement": enhancement_desc,
        "section": section,
        "confidence": confidence
    })

# Helper to whiten near-white backgrounds without numpy
def whiten_background(img, threshold=242):
    # Convert to RGB
    rgb = img.convert("RGB")
    # For every pixel, if R, G, B > threshold, set to 255, 255, 255
    data = rgb.getdata()
    new_data = []
    for item in data:
        if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
            new_data.append((255, 255, 255))
        else:
            new_data.append(item)
    rgb.putdata(new_data)
    return rgb

# Helper to blacken near-black backgrounds
def blacken_background(img, threshold=25):
    rgb = img.convert("RGB")
    data = rgb.getdata()
    new_data = []
    for item in data:
        if item[0] <= threshold and item[1] <= threshold and item[2] <= threshold:
            new_data.append((0, 0, 0))
        else:
            new_data.append(item)
    rgb.putdata(new_data)
    return rgb

# 1. Master Icon Mark (1600x1596) -> bhumi-logo-icon.jpg & bhumi-logo-icon.png
f1 = "WhatsApp Image 2026-s10-14 at 3.37.55 PM.jpeg"
p1 = os.path.join(ASSETS_DIR, f1)
with Image.open(p1) as img:
    rgb = img.convert("RGB")
    sharpened = rgb.filter(ImageFilter.UnsharpMask(radius=1.2, percent=115, threshold=3))
    clean_jpg = whiten_background(sharpened, threshold=248)
    out_jpg = os.path.join(ENHANCED_DIR, "bhumi-logo-icon.jpg")
    clean_jpg.save(out_jpg, "JPEG", quality=95, optimize=True)
    
    # Transparent PNG
    rgba = clean_jpg.convert("RGBA")
    data = rgba.getdata()
    new_data = []
    for item in data:
        # If pure white or near white outside badge
        if item[0] >= 248 and item[1] >= 248 and item[2] >= 248:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    rgba.putdata(new_data)
    out_png = os.path.join(ENHANCED_DIR, "bhumi-logo-icon.png")
    rgba.save(out_png, "PNG", optimize=True)
    
    record(f1, "bhumi-logo-icon.jpg / bhumi-logo-icon.png", "Official Brand Logo (Master Icon Mark)",
           img.size, clean_jpg.size,
           "UnsharpMask (r=1.2, 115%), background whitening, transparent PNG generation for header/navbar",
           "Header Navbar / Hero / Favicon / Brand Identity", "High (Confirmed Official Mark)")

# 2. Full Brand Logo (1024x1024) -> bhumi-full-logo.jpg
f2 = "WhatsApp Image 2026-10-14 sat 3.37.53 PM.jpeg"
p2 = os.path.join(ASSETS_DIR, f2)
with Image.open(p2) as img:
    rgb = img.convert("RGB")
    enhancer_c = ImageEnhance.Contrast(rgb)
    contrasted = enhancer_c.enhance(1.04)
    sharpened = contrasted.filter(ImageFilter.UnsharpMask(radius=1.0, percent=120, threshold=2))
    out_jpg = os.path.join(ENHANCED_DIR, "bhumi-full-logo.jpg")
    sharpened.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f2, "bhumi-full-logo.jpg", "Official Brand Logo (Full Lockup)",
           img.size, sharpened.size,
           "Micro-contrast boost (1.04), UnsharpMask (r=1.0, 120%) for crisp typography and CMYK stripe",
           "Header / Hero Section / About Us / Footer", "High (Confirmed Official Logo)")

# 3. Official Visiting Card (1536x904) -> bhumi-visiting-card-horizontal.jpg
f3 = "WhatsApp Image 2026-10-13 at 7.22.03 PM.jpeg"
p3 = os.path.join(ASSETS_DIR, f3)
with Image.open(p3) as img:
    rgb = img.convert("RGB")
    enhancer_c = ImageEnhance.Contrast(rgb)
    contrasted = enhancer_c.enhance(1.03)
    sharpened = contrasted.filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=3))
    out_jpg = os.path.join(ENHANCED_DIR, "bhumi-visiting-card-horizontal.jpg")
    sharpened.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f3, "bhumi-visiting-card-horizontal.jpg", "Official Stationery / Visiting Card",
           img.size, sharpened.size,
           "Contrast normalization (1.03), UnsharpMask (r=1.0, 115%) to enhance phone numbers & product photos",
           "About Us / Contact / Workshop Profile", "High (Confirmed Official Visiting Card)")

# 4. Comprehensive Business Profile & Services Sheet (1130x1300) -> bhumi-business-profile-catalog.jpg
f4 = "WhatsApp Image 2026-10-14 at 3.36.44 PM.jpeg"
p4 = os.path.join(ASSETS_DIR, f4)
with Image.open(p4) as img:
    rgb = img.convert("RGB")
    enhancer_c = ImageEnhance.Contrast(rgb)
    contrasted = enhancer_c.enhance(1.03)
    sharpened = contrasted.filter(ImageFilter.UnsharpMask(radius=1.0, percent=120, threshold=2))
    out_jpg = os.path.join(ENHANCED_DIR, "bhumi-business-profile-catalog.jpg")
    sharpened.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f4, "bhumi-business-profile-catalog.jpg", "Official Services & Brand Partner Sheet",
           img.size, sharpened.size,
           "Text sharpening (r=1.0, 120%), contrast tuning for service bullets and 10 partner logos",
           "About Us / Services Section / AMC Verification", "High (Confirmed Official Catalog)")

# 5. HP LaserJet Pro MFP M126a (700x560) -> product-hp-laserjet-m126a.jpg (Upscaled to 1400x1120)
f5 = "WhatsApp Image 2026-10-14 aat 3.37.55 PM.jpeg"
p5 = os.path.join(ASSETS_DIR, f5)
with Image.open(p5) as img:
    rgb = img.convert("RGB")
    upscaled = rgb.resize((rgb.width * 2, rgb.height * 2), Image.Resampling.LANCZOS)
    enhancer_b = ImageEnhance.Brightness(upscaled)
    brightened = enhancer_b.enhance(1.03)
    enhancer_c = ImageEnhance.Contrast(brightened)
    contrasted = enhancer_c.enhance(1.04)
    sharpened = contrasted.filter(ImageFilter.UnsharpMask(radius=1.2, percent=125, threshold=3))
    clean_jpg = whiten_background(sharpened, threshold=245)
    out_jpg = os.path.join(ENHANCED_DIR, "product-hp-laserjet-m126a.jpg")
    clean_jpg.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f5, "product-hp-laserjet-m126a.jpg", "Product Photo - Laser Printer",
           img.size, clean_jpg.size,
           "2x Lanczos upscale (1400x1120), brightness (+3%), contrast (+4%), UnsharpMask for panel & text clarity, white background cleanup",
           "Products: Printers & Consumables / Services: Printer Repair", "High (HP LaserJet Pro MFP M126a)")

# 6. CCTV Dome Camera (500x335) -> service-cctv-dome-camera.jpg (Upscaled to 1000x670)
f6 = "WhatsApp Image 2026-10-14 at 3.37.522 PM.jpeg"
p6 = os.path.join(ASSETS_DIR, f6)
with Image.open(p6) as img:
    rgb = img.convert("RGB")
    upscaled = rgb.resize((rgb.width * 2, rgb.height * 2), Image.Resampling.LANCZOS)
    enhancer_b = ImageEnhance.Brightness(upscaled)
    brightened = enhancer_b.enhance(1.04)
    enhancer_c = ImageEnhance.Contrast(brightened)
    contrasted = enhancer_c.enhance(1.06)
    sharpened = contrasted.filter(ImageFilter.UnsharpMask(radius=1.2, percent=120, threshold=3))
    out_jpg = os.path.join(ENHANCED_DIR, "service-cctv-dome-camera.jpg")
    sharpened.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f6, "service-cctv-dome-camera.jpg", "Service / Product Photo - CCTV Dome Camera",
           img.size, sharpened.size,
           "2x Lanczos upscale (1000x670), brightness (+4%), contrast (+6%), UnsharpMask for IR ring & dome detail",
           "Services: CCTV Installation & Maintenance / Products: CCTV Systems", "High (Indoor Dome Camera)")

# 7. Mantra MFS110 Biometric Scanner (560x566) -> product-mantra-mfs110-biometric.jpg (Upscaled to 1120x1132)
f7 = "WhatsApp Image 2026-10-14 at 3.37.52 PMq.jpeg"
p7 = os.path.join(ASSETS_DIR, f7)
with Image.open(p7) as img:
    rgb = img.convert("RGB")
    upscaled = rgb.resize((rgb.width * 2, rgb.height * 2), Image.Resampling.LANCZOS)
    sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=1.1, percent=125, threshold=2))
    out_jpg = os.path.join(ENHANCED_DIR, "product-mantra-mfs110-biometric.jpg")
    sharpened.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f7, "product-mantra-mfs110-biometric.jpg", "Product Graphic - Biometric & Attendance",
           img.size, sharpened.size,
           "2x Lanczos upscale (1120x1132), UnsharpMask (r=1.1, 125%) for text and sensor clarity",
           "Products: Security & Biometrics / Services: Security Systems", "High (Mantra MFS110 L1 Scanner)")

# 8. Dual SC Fiber Patch Cords (1600x1600) -> product-fiber-patch-cords-sc.jpg
f8 = "WhatsApp Image 2026-10-14 at 3.37.53 dPM.jpeg"
p8 = os.path.join(ASSETS_DIR, f8)
with Image.open(p8) as img:
    rgb = img.convert("RGB")
    sharpened = rgb.filter(ImageFilter.UnsharpMask(radius=1.0, percent=110, threshold=2))
    clean_jpg = whiten_background(sharpened, threshold=245)
    out_jpg = os.path.join(ENHANCED_DIR, "product-fiber-patch-cords-sc.jpg")
    clean_jpg.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f8, "product-fiber-patch-cords-sc.jpg", "Product Photo - Fiber Optic Patch Cords",
           img.size, clean_jpg.size,
           "Subtle UnsharpMask (r=1.0, 110%), background normalization to clean #FFFFFF",
           "Products: Business Networking Equipment / Services: IT Hardware & Networking", "High (SC-UPC / SC-APC Fiber)")

# 9. Single SC Fiber Connector (1024x768) -> product-sc-fiber-connector-single.jpg
f9 = "WhatsApp Image 2026-10-14 at 3.37.52 PM.jpeg"
p9 = os.path.join(ASSETS_DIR, f9)
with Image.open(p9) as img:
    rgb = img.convert("RGB")
    sharpened = rgb.filter(ImageFilter.UnsharpMask(radius=1.0, percent=115, threshold=2))
    clean_jpg = whiten_background(sharpened, threshold=240)
    out_jpg = os.path.join(ENHANCED_DIR, "product-sc-fiber-connector-single.jpg")
    clean_jpg.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f9, "product-sc-fiber-connector-single.jpg", "Product Photo - Fiber Connector",
           img.size, clean_jpg.size,
           "Background normalization to clean white, UnsharpMask for ceramic ferrule detail",
           "Products: Business Networking / Services: Structured Cabling", "High (SC Fiber Connector)")

# 10. Coiled Fiber Cable with SC Connectors (1600x1395) -> product-fiber-cable-coil-sc.jpg
f10 = "WhatsApp Image 2026-d10-14 at 3.37.52 PM.jpeg"
p10 = os.path.join(ASSETS_DIR, f10)
with Image.open(p10) as img:
    rgb = img.convert("RGB")
    sharpened = rgb.filter(ImageFilter.UnsharpMask(radius=1.0, percent=110, threshold=2))
    clean_jpg = whiten_background(sharpened, threshold=242)
    out_jpg = os.path.join(ENHANCED_DIR, "product-fiber-cable-coil-sc.jpg")
    clean_jpg.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f10, "product-fiber-cable-coil-sc.jpg", "Product Photo - Coiled Fiber Cable",
           img.size, clean_jpg.size,
           "Background normalization to clean white, subtle edge enhancement for cable sheath markings",
           "Products: Business Networking Equipment / Services: IT Hardware & Networking", "High (Fiber Patch Cord Coil)")

# 11. Multi-Color Cat6 RJ45 Patch Cables (500x409) -> product-cat6-ethernet-cables.jpg (Upscaled to 1000x818)
f11 = "WhatsApp Image 2026-10-14 awt 3.37.53 PM.jpeg"
p11 = os.path.join(ASSETS_DIR, f11)
with Image.open(p11) as img:
    rgb = img.convert("RGB")
    upscaled = rgb.resize((rgb.width * 2, rgb.height * 2), Image.Resampling.LANCZOS)
    enhancer_c = ImageEnhance.Contrast(upscaled)
    contrasted = enhancer_c.enhance(1.05)
    sharpened = contrasted.filter(ImageFilter.UnsharpMask(radius=1.1, percent=120, threshold=3))
    clean_jpg = whiten_background(sharpened, threshold=240)
    out_jpg = os.path.join(ENHANCED_DIR, "product-cat6-ethernet-cables.jpg")
    clean_jpg.save(out_jpg, "JPEG", quality=95, optimize=True)
    record(f11, "product-cat6-ethernet-cables.jpg", "Product Photo - Cat6 Ethernet Cables",
           img.size, clean_jpg.size,
           "2x Lanczos upscale (1000x818), contrast boost (1.05), UnsharpMask for transparent RJ45 plug & pin clarity",
           "Services: IT Hardware & Networking / Products: Business Networking", "High (Cat6 RJ45 LAN Cables)")

# 12. Office Telephone Icon (980x980) -> icon-telephone-intercom.jpg & icon-telephone-intercom.png
f12 = "WhatsApp Image 2026-10-14 at 3.37.s54 PM.jpeg"
p12 = os.path.join(ASSETS_DIR, f12)
with Image.open(p12) as img:
    gray = img.convert("L")
    # Clean thresholding
    data = gray.getdata()
    clean_data = [0 if val < 180 else 255 for val in data]
    clean_l = Image.new("L", gray.size)
    clean_l.putdata(clean_data)
    out_jpg = os.path.join(ENHANCED_DIR, "icon-telephone-intercom.jpg")
    clean_l.save(out_jpg, "JPEG", quality=95, optimize=True)
    
    # PNG with alpha
    rgba_data = []
    for val in clean_data:
        if val == 0:
            rgba_data.append((20, 25, 35, 255))
        else:
            rgba_data.append((255, 255, 255, 0))
    rgba_img = Image.new("RGBA", gray.size)
    rgba_img.putdata(rgba_data)
    out_png = os.path.join(ENHANCED_DIR, "icon-telephone-intercom.png")
    rgba_img.save(out_png, "PNG", optimize=True)
    record(f12, "icon-telephone-intercom.jpg / icon-telephone-intercom.png", "Graphic Icon - Telephone System",
           img.size, clean_l.size,
           "Binary vector thresholding, compression noise removal, transparent PNG generation",
           "Services / AMC Support / Intercom Systems", "High (Office Telephone Icon)")

# 13. CCTV Bullet Camera Illustration (512x512) -> icon-cctv-bullet-camera.jpg & icon-cctv-bullet-camera.png (Upscaled to 1024x1024)
f13 = "WhatsApp Image 2026-10-14s at 3.37.54 PM.jpeg"
p13 = os.path.join(ASSETS_DIR, f13)
with Image.open(p13) as img:
    rgb = img.convert("RGB")
    upscaled = rgb.resize((rgb.width * 2, rgb.height * 2), Image.Resampling.LANCZOS)
    sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=1.1, percent=120, threshold=2))
    clean_jpg = blacken_background(sharpened, threshold=25)
    out_jpg = os.path.join(ENHANCED_DIR, "icon-cctv-bullet-camera.jpg")
    clean_jpg.save(out_jpg, "JPEG", quality=95, optimize=True)
    
    # Transparent PNG version
    rgba = clean_jpg.convert("RGBA")
    data = rgba.getdata()
    rgba_data = []
    for item in data:
        if item[0] <= 15 and item[1] <= 15 and item[2] <= 15:
            rgba_data.append((0, 0, 0, 0))
        else:
            rgba_data.append(item)
    rgba.putdata(rgba_data)
    out_png = os.path.join(ENHANCED_DIR, "icon-cctv-bullet-camera.png")
    rgba.save(out_png, "PNG", optimize=True)
    record(f13, "icon-cctv-bullet-camera.jpg / icon-cctv-bullet-camera.png", "Graphic Icon - CCTV Bullet Camera",
           img.size, clean_jpg.size,
           "2x Lanczos upscale (1024x1024), pure black background normalization, transparent PNG generation",
           "Services: CCTV Installation & Maintenance / Security Graphics", "High (CCTV Bullet Camera Vector Graphic)")

print(f"Successfully processed {len(results)} images into {ENHANCED_DIR}")

# Print summary table
import json
with open(os.path.join(ENHANCED_DIR, "inventory.json"), "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("Saved inventory.json")
