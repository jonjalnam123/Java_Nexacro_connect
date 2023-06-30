 package sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import sample.service.SampleService;

@Controller
public class SampleController {

	private Logger logger = LoggerFactory.getLogger(SampleController.class);

	@Resource(name = "sampleService")
	private SampleService sampleService;

	// 넥사크로 단순 조회
	@RequestMapping(value = "loadList.do")
	public NexacroResult loadListdo() {

		List<Map<String, Object>> loadListdo = sampleService.loadListdo();

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsTest", loadListdo);

		return result;
	}

	// 넥사크로 조회조건 조회
	@RequestMapping(value = "else.do")
	public NexacroResult elsedo(@ParamVariable(name = "sNo") String rNo) {
		logger.debug("이름 넘어 오나?===============" + rNo);

		List<Map<String, Object>> resultData = sampleService.elsedo(rNo);

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsGrid", resultData);
		
		logger.debug("조건조회결과" + resultData);
		
		return result;
	}

}
