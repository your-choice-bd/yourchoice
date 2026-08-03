document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to YourChoice!");

    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", () => {
            alert("🛍️ Welcome to YourChoice!\nঅনলাইন অর্ডার শীঘ্রই চালু হবে।");
        });
    }
});
