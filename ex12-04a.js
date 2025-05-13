year = +prompt("태어난 연도를 입력하세요");
if (year == null || year == "") {
    alert("입력된 값이 없습니다.");
}else if(year > 2006){
    alert("미성년자는 집가라");
    document.write("미성년자입니다.");
}else if(year === 2006){
    alert("성인 축하");
    document.write("20살입니다.");
}else{
    alert("이미 성인");
    document.write("성인입니다.");
}