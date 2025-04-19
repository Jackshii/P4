/* DEVELOPER: Jack Shi, IS117-102, Spring 2025 */
document.addEventListener('DOMContentLoaded', function() {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.forEach(function(dropdownToggleEl) {
        new bootstrap.Dropdown(dropdownToggleEl);
    });
});