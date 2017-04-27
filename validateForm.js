function validateForm()    
  {
   var hoten = document.forms['myForm']['entry.750736096'].value;
   var sdt = document.forms['myForm']['entry.2088500007'].value;
   if(hoten == ''){
    document.getElementById('error-message-hoten').innerHTML = 'Anh chị vui lòng điền họ tên <br />';
    return false;
   }
   else 
   {
    document.getElementById('error-message-hoten').innerHTML = '';
   }
   if(sdt == '')
   {
    document.getElementById('error-message-sdt').innerHTML = 'Anh chị vui lòng nhập sđt <br />';
    return false;
   }
   else if (isNaN(sdt))
   {
    document.getElementById('error-message-sdt').innerHTML = 'Anh chị đã nhập sai định dạng số điện thoại <br />';
    return false;
   }
   else
   {
      document.getElementById('error-message-sdt').innerHTML = '';
   }
  
   document.getElementById('error-message-hoten').innerHTML = '';
   document.getElementById('success-message').innerHTML = ' <br /> <br />Cám ơn anh chị đã để lại thông tin, nhân viên bên em sẽ liên hệ với anh chị trong thời gian sớm nhất.<br />';
   return true;
  }
