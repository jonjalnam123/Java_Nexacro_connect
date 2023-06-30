(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","660","170","170","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","297","80","213","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTest");
            obj.set_codecolumn("no");
            obj.set_datacolumn("name");
            obj.set_autoskip("false");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","60","150","535","370",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsGrid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"no\"/><Cell col=\"1\" text=\"name\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\EduPack\workspace\c2works\src\main\c2works\FrameBase
        *	@FileName Form_Work.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/06/30
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/06/30		최정석		최초 생성
        *
        *
        */
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        /**
        * @description 폼이 온로드 될 때 전체 조회
        */
        this.Form_Work_onload = function(obj,e)
        {
        	var strSvcId    = "loadList";
        	var strSvcUrl   = "svcUrl::loadList.do";
        	var inData      = "";
        	var outData     = "dsTest=dsTest";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId ,     // transaction을 구분하기 위한 svc id값
        		strSvcUrl ,   // trabsaction을 요청할 주소
        		inData ,     // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData ,     // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg,     // 입력값으로 보낼 arguments, a=b
        		callBackFnc,   // transaction의 결과를 받을 Function 이름
        		isAsync);     // 비동기통신 여부 [생략가능]
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**
        * @description 버튼 클릭시 조건조회 트랜잭션
        */
        this.Button00_onclick = function(obj,e)
        {
        	var sNo = this.Combo00.value;

        	var strSvcId    = "elsedo";
        	var strSvcUrl   = "svcUrl::else.do";
        	var inData      = "";
        	var outData     = "dsGrid=dsGrid";
        	var strArg      = "sNo=" + sNo;
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId ,     // transaction을 구분하기 위한 svc id값
        		strSvcUrl ,   // trabsaction을 요청할 주소
        		inData ,     // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData ,     // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg,     // 입력값으로 보낼 arguments, a=b
        		callBackFnc,   // transaction의 결과를 받을 Function 이름
        		isAsync);     // 비동기통신 여부 [생략가능]
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 콜백
        */
        this.fnCallback = function (svcId, errCd, errMsg)
        {
        	if(svcId == "elsedo") { //조회결과 알림
        		this.alert("조회완료");
        	}else if (svcId == "loadList") { //콤보박스에 ALL 값 기본적으로 두기
        		this.Combo00.set_text(this.dsTest.getColumn(0,"name"));
        	}
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Combo00.addEventHandler("canitemchange",this.Combo00_canitemchange,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.dsTest.addEventHandler("oncolumnchanged",this.dsTest_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
