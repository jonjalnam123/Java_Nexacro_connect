package sample.service;

import java.util.List;
import java.util.Map;

public interface SampleService {

	//전체 조회
	List<Map<String, Object>> loadListdo();

	//조회 조건 조회
	List<Map<String, Object>> elsedo(String rNo);
}
