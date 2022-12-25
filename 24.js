function saleHotdogs(n){
  
    for (let i = 0; i < n; i++) {
    if (n < 5) {
        return n * 100;
      } else if (n >= 5 && n < 10) {
        return n * 95;
      } else (n >= 10) 
        return n * 90;
      }
    }