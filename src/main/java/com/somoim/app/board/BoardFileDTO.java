package com.somoim.app.board;

import com.somoim.app.files.FileDTO;

public class BoardFileDTO extends FileDTO {
	
	private Long boardNum;

	private String userName;
	
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Long getBoardNum() {
		return boardNum;
	}

	public void setBoardNum(Long boardNum) {
		this.boardNum = boardNum;
	}
	

	

}
