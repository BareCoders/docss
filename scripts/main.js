// ============================================
// 导航菜单：点击顶级菜单显示/隐藏二级菜单
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有带有子菜单的顶级菜单项
    const submenuParents = document.querySelectorAll('.nav-item.top-level.has-submenu');
    
    submenuParents.forEach(function(parent) {
        // 获取可点击的链接（.nav-link）
        const triggerLink = parent.querySelector('a.nav-link');
        if (!triggerLink) return;
        
        triggerLink.addEventListener('click', function(event) {
            // 阻止默认的链接跳转行为（实现点击才显示）
            event.preventDefault();
            
            // 可选：关闭其它已经打开的菜单（互斥效果，一次只打开一个）
            submenuParents.forEach(function(other) {
                if (other !== parent && other.classList.contains('open')) {
                    other.classList.remove('open');
                }
            });
            
            // 切换当前菜单的打开状态
            parent.classList.toggle('open');
        });
    });
});
