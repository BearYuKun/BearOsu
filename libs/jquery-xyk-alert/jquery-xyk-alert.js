define(['jquery'], () => {
    class Header {
        constructor() {
            this.init()
        }
        init() {
            ; ($.extend({
                myAlert(title, content) {
                    $('<div>').html(`
                <div class="alertMask">
                    <div class="alert default">
                         <div class="title">
                              <h5>${title}</h5>
                         </div>
                        <div class="content">
                         ${content}
                         </div>
                    </div>
                </div>
                `).appendTo(document.body).fadeIn(1000).find('.alert').slideDown(1000).on('click', e => e.stopPropagation()).parents(".alertMask").on('click', function () {
                        $(this).remove()
                    })
                }
            }))()

            $.extend({
                myConfirm(title, content) {
                    $('<div>').html(`
                <div class="alertMask">
                    <div class="alert default">
                         <div class="title">
                              <h5>${title}</h5>
                         </div>
                        <div class="content">
                         ${content}
                         </div>
                         <div class = "confirm">
                         <span class = "yes">Yes</span> <span class = "no">No</span>
                         </div>
                    </div>
                </div>
                `).appendTo(document.body).fadeIn(1000).find('.alert').slideDown(1000).find('.yes,.no').on('click', function () {
                        $(this).parents(".alertMask").remove()
                        if ($(this).hasClass('yes')) {
                            return true
                        }
                        else return false
                    })
                }
            })
        }
    }
    new Header()
}
)
