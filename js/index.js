// (function ($) {
//     $(document).ready(function() {
//         $('.ugb-expand__toggle').on('click', function() {
//             var parentExpand = $(this).closest('.ugb-expand');
//             var isExpanded = parentExpand.hasClass('ugb-expand--expanded');

//             console.log('item clicked')
            
//             $('.ugb-expand').removeClass('ugb-expand--expanded');
            
//             if (!isExpanded) {
//                 parentExpand.addClass('ugb-expand--expanded');
				
// 				console.log('expanded working')
//             }
//         });
//     });
// })(jQuery);

// document.addEventListener('DOMContentLoaded', function() {
//     var expandBlocks = document.querySelectorAll('.wp-block-stackable-expand');
//     console.log('dom content loaded')
//     console.log(expandBlocks.length)

//     expandBlocks.forEach(function(block) {
//       var showMoreButtons = block.querySelectorAll('.stk-block-expand__show-button');
//       var showLessButtons = block.querySelectorAll('.stk-block-expand__hide-button');
//     //   console.log("show more", showMoreButtons.length)
//     //   console.log("show less", showLessButtons.length)
      
//       showMoreButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             console.log('button clicked')
//           // Close all other show less buttons within the same expand block
//           showLessButtons.forEach(function(showLessButton) {
//             if (showLessButton !== button.nextElementSibling) {
//               showLessButton.click();
//             }
//           });
//         });
//       });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var showMoreButtons = document.querySelectorAll('.stk-block-expand__show-button');
//     var showLessButtons = document.querySelectorAll('.stk-block-expand__hide-button');
  
//     showMoreButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//         // Close all other show less buttons
//         showLessButtons.forEach(function(showLessButton) {
//           if (showLessButton !== button.nextElementSibling) {
//             showLessButton.click();
//           }
//         });
//       });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var expandBlocks = document.querySelectorAll('.wp-block-stackable-expand');
  
//     expandBlocks.forEach(function(block) {
//       var showMoreButtons = block.querySelectorAll('.stk-block-expand__show-button');
//       var showLessButtons = block.querySelectorAll('.stk-block-expand__hide-button');
  
//       showMoreButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//           var allShowLessButtons = document.querySelectorAll('.stk-block-expand__hide-button');
//           console.log(allShowLessButtons.length)
          
//           allShowLessButtons.forEach(function(showLessButton) {
//             if (showLessButton !== button.nextElementSibling) {
//                 console.log('worked')
//                 showLessButton.classList.remove('is-expanded'); // Minimize other expanded elements
//                 // showLessButton.click(); // Minimize other expanded elements
//             }
//           });
//         });
//       });
//     });
//   });


  if (document.querySelector('details')) {
    // Fetch all the details elements
    const details = document.querySelectorAll('details');

    // Add onclick listeners
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            // Close all details that are not targetDetail
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var detailsElements = document.querySelectorAll('details');
  
    detailsElements.forEach(function(detailsElement) {
      detailsElement.addEventListener('toggle', function() {
        var summaryElement = detailsElement.querySelector('summary');
  
        if (detailsElement.open) {
          summaryElement.innerHTML = 'Show Less';
        } else {
          summaryElement.innerHTML = 'Show More';
        }
      });
    });
  });
  

  
  
  


