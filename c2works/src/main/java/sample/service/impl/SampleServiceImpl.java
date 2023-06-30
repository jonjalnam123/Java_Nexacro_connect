package sample.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import sample.service.SampleService;

@Service("sampleService")
public class SampleServiceImpl implements SampleService {
	private Logger logger = LoggerFactory.getLogger(SampleServiceImpl.class);

	@Resource(name = "sampleMapper")
	private SampleMapper sampleMapper;
	
	
	@Override
	public List<Map<String, Object>> loadListdo() { //전체 조회

		return sampleMapper.loadListdo();
	}

	@Override
	public List<Map<String, Object>> elsedo(String rNo) { //조건 조회
	
		return sampleMapper.elsedo(rNo);
	}
}