document.addEventListener('DOMContentLoaded', (event) => {
    const candleCategory = document.getElementById("candle-category");
    candleCategory.addEventListener("click", toggleMenu);

    const studyItem = document.getElementById('try');
    // 添加点击事件监听器
    studyItem.addEventListener('click', function() {
        // 页面跳转到指定的 URL
        window.location.href = 'page2.html';
    });
});
  
function toggleMenu() {
    var menu = document.getElementById("navMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
