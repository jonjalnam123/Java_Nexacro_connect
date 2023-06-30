package sample.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("sampleMapper")
public interface SampleMapper {
	
	//전체 조회
	List<Map<String, Object>> loadListdo();
	
	//조건 조회
	List<Map<String, Object>> elsedo(String rNo);



}
