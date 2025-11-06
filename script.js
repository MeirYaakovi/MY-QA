function updateProfileImage() {
    const desktopImage = document.getElementById('desktop-profile-image');
    const mobileImage = document.getElementById('mobile-profile-image');

    if (window.innerWidth <= 768) {
        // אם רוחב המסך קטן או שווה ל-768 פיקסלים (מובייל)
        desktopImage.style.display = 'none';
        mobileImage.style.display = 'block';
    } else {
        // אחרת (דסקטופ)
        desktopImage.style.display = 'block';
        mobileImage.style.display = 'none';
    }
}

// הפעל את הפונקציה בעת טעינת הדף
updateProfileImage();

// הפעל את הפונקציה גם כאשר גודל החלון משתנה
window.addEventListener('resize', updateProfileImage);