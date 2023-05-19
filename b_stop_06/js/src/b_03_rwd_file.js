//b_03_rwd_file.js

(function($){
  //기능설명

    var jsonData = '../data/device_type.json';
    $.getJSON(jsonData,function(data){
    var checkType = $.CheckType;
    console.log(checkType);
    });

  })(jQuery);
  