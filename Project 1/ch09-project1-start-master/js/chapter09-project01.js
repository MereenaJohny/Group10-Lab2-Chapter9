
/* add code here  */
window.addEventListener("load", function () {
    document.querySelectorAll('.hilightable').forEach(item => {

        var hilightable_error = document.querySelector('.hilightable');

        item.addEventListener('focus', event => {
            item.classList.remove('hilightable_error');
            item.classList.add('highlight');
        });

        item.addEventListener('blur', event => {
            item.classList.remove('highlight');
            item.classList.add('hilightable_error');
        });
        var form = document.getElementById('mainform');
        mainform.addEventListener('submit', Event => {
            document.querySelectorAll('.required').forEach(item => {
                if (itm.value == "") {
                    item.classList.add('error');
                    event.preventDefault();
                }

            }
            )
        })
    })
})