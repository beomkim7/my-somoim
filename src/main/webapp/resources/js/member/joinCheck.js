
console.log("js파일 진입");

const userName = document.getElementById("userName");
const password = document.getElementById("password");
const passwordResult = document.getElementById("passwordResult");
const passwordCheck = document.getElementById("passwordCheck");
const passwordCheckResult = document.getElementById("passwordCheckResult");
const nickName = document.getElementById("nickName");
const realName = document.getElementById("name");
const userBirth = document.getElementById("userBirth");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const btn = document.getElementById("btn");
const frn = document.querySelector("#frm");
const person_chk = document.getElementById("check1");
const birthday = document.getElementById("userBirth").value;

const checkId = document.getElementById("checkId");

let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let selectDay = document.getElementById("day");

let p1 = false;
let p2 = false;

let id1 = false;


     let accessTaken = 'none';													
		let errCnt=0;						
     getAccessToken();												
     function getAccessToken(){												
     	jQuery.ajax({																												
     		type:'GET', 																											
     		url: 'https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json',													
     		data:{																													
     		consumer_key : '[consumer_key 입력]',																					
     		consumer_secret : '[consumer_secret 입력]',																				
     		},																														
     		success:function(data){																									
     			errCnt = 0;																									
     			accessToken = data.result.accessToken														
     			alert(accessToken);												
     			geoCoe();												
     		},																													
     		error:function(data) {																									
     		}																														
     	});																		
     }												
     function geoCoe(){												
     	var address = '대전광역시 서구 청사로 189';												
     	address = encodeURIComponent(address);												
     	var pagenum = '0';												
     	var resultcount = '5';												
     	jQuery.ajax({															
     		type:'GET', 																											
     		url: 'https://sgisapi.kostat.go.kr/OpenAPI3/addr/geocode.json',														
     		data:{															
     			accessToken : accessToken,												
     			address : address,																					
     			pagenum : pagenum,													
     			resultcount : resultcount,													
     		},																														
     		success:function(data){																									
     			switch (parseInt(data.errCd)){																					
     					case 0:																					
     						var totalcount = data.result.totalcount;																				
     						for(var i=0; i<data.result.resultdata.length; i++){;																				
     							var resultdata = data.result.resultdata[i];																				
     							var x = resultdata.x;																				
     							var y = resultdata.y;																				
     						};																				
     					break;																					
     					case -401:																						
                         errCnt ++;	
                         if(errCnt<200){	
     						getAccessToken();																					
     						}																					
     					break;																					
     					case -100:																					
     					break;																					
     			}																					
     		},																														
     		error:function(data) {																									
     		}																														
     	});																		
   }															

	  
	    	






$("#checkId").click(function(){
    fetch("./idCheck?userName="+$("#userName").val(),{
        method:"GET",
    })
    .then(response=>response.text())
    .then(response=>{response.trim()
        console.log(response)
        if(response == 1){
            alert("사용 가능합니다")
            id1 = true;
        }else{
            alert("중복된아이디 입니다")
        }
    })
})



function strongPassword (str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

password.addEventListener("keyup",()=>{
    let p = password.value;
    if(strongPassword(p)){
        passwordResult.innerHTML=""
        p1=true;
    }else{        
        passwordResult.innerHTML="비밀번호는 8글자 이상,영문,숫자,특수문자가 들어가야합니다"
        p1=false;
    }
})

    
passwordCheck.addEventListener("keyup",()=>{
    
    if(password.value==passwordCheck.value){
        passwordCheckResult.innerHTML=""
        p2=true;
    }else{
        passwordCheckResult.innerHTML="비밀번호가 불일치"
        p2=false;
    }
})



function populateYears() {
    // 현재 연도부터 50년 전까지의 옵션을 생성하여 추가
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 50; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}
selectYear.addEventListener("click",function(){
    populateYears();
});


function populateMonths() {
    // 1월부터 12월까지의 옵션을 생성하여 추가
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectMonth.appendChild(option);
    }
}
selectMonth.addEventListener("click",()=>{
    populateMonths();
})

function getDaysInMonth(year, month) {
    // 1월부터 12월까지의 날짜 수를 배열에 저장
    let daysInMonth = [
        31, // 1월
        28, // 2월 (평년)
        31, // 3월
        30, // 4월
        31, // 5월
        30, // 6월
        31, // 7월
        31, // 8월
        30, // 9월
        31, // 10월
        30, // 11월
        31  // 12월
    ];

    // 윤년인 경우 2월의 날짜 수를 29일로 변경
    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }

    // 해당 연도와 월의 날짜 수 반환
    for(let i = 1;i<=daysInMonth[month - 1];i++){
        let option = document.createElement("option");
        option.value=i;
        option.textContent=i;
        selectDay.appendChild(option);
    }
}

function isLeapYear(year) {
    // 윤년인지 확인
    // 4로 나누어 떨어지면서, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어지는 연도
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

selectDay.addEventListener("click",()=>{
    let year = selectYear.value;
    let month = selectMonth.value;
    getDaysInMonth(year,month);
})


const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const p_pattern =/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;



btn.addEventListener("click",(e)=>{
    
    e.preventDefault(); 
    let p = password.value;
    let year = selectYear.value;
    let month = selectMonth.value;
    let date = selectDay.value;
    
    //개인정보 이용 동의검사

    if(!id1){
        alert("아이디중복검사는 필수입니다");
        return false;
    }
    
    //아이디 입력여부 검사
    if (userName.value == "") {
        alert("아이디를 입력하지 않았습니다.")
        userName.focus();
        return false;
    }
    //아이디 유효성 검사 (영문소문자, 숫자만 허용)
    for (i = 0; i < userName.value.length; i++) {
        ch = userName.value.charAt(i)
        if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')&&!(ch >= 'A' && ch <= 'Z')) {
            alert("아이디는 영문 대소문자, 숫자만 입력가능합니다.")
            userName.focus();
            userName.select();
            return false;
        }
    }
    
    //아이디 길이 체크 (4~12자)
    if (userName.value.length<4 || userName.value.length>12) {
        alert("아이디를 4~12자까지 입력해주세요.")
        userName.focus();
        userName.select();
        return false;
    }
    
    if (userName.value == password.value) {
        alert("아이디와 비밀번호가 같습니다.")
        password.focus();
        return false;
    }
    
    if(!strongPassword(p)){
        alert("비밀번호는 8글자 이상,영문,숫자,특수문자가 들어가야합니다");
        return false;
    }
    if(!(p1&&p2)){
        alert("비밀번호가 일치하지 않습니다")
        return false;
    }
    if (realName.value == "") {
        alert("이름을 입력하지 않았습니다.")
        realName.focus();
        return false;
    }
    if(realName.value.length<2){
        alert("이름을 2자 이상 입력해주십시오.")
        realName.focus();
        return false;
    }
    
    if(nickName.value == "") {
        alert("별명을 입력하지 않았습니다.")
        nickName.focus();
        return false;
    }
    if(nickName.value.length<2){
        alert("별명을 2자 이상 입력해주십시오.")
        nickName.focus();
        return false;
    }

    if(year > 2014||year === ''){
        alert("2014년생 부터 가입가능");
        return false;
    }

    if(month == '' || date ==''){
        alert("월 또는 일을 확인")
        return false;
    }

    userBirth.value=year+"."+month+"."+date;
    

    
    if (!p_pattern.test(phone.value)) {
        alert("전화번호가 올바르지 않습니다")
        phone.focus();
        return false;
    }
    
    if(pattern.test(email.value)===false){
        alert('올바른 이메일 주소를 입력해주세요.')     
        email.focus();   
        return false;
    }


    if(!person_chk.checked){
        alert("개인정보 이용동의는 필수입니다");
        return false;
    }
    


    frm.submit();

    

})












