<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>chat</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="/resources/assets/css/chat.css">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
	<c:import url="../temps/head_css.jsp"></c:import>
</head>

<body>
	<c:import url="../temps/header.jsp"></c:import>
	<span class="my-5"></span>
	<div class="container">
		<div class="row clearfix">
			<div class="col-lg-12">
				<div class="card chat-app">
					<div id="plist" class="people-list">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fa fa-search"></i></span>
							</div>
							<input type="text" class="form-control" placeholder="Search...">
						</div>
						<!-- 채팅방 목록 -->
						<ul class="list-unstyled chat-list mt-2 mb-0">
							<li class="clearfix">
								<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar">
								<div class="about">
									<div class="name my-4">Vincent Porter</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="chat">
						<div class="chat-header clearfix">
							<div class="row">
								<div class="col-lg-6">
									<div class="chat-about">
									<a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
										<img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
									</a>
										<h6 class="m-b-0">${user.nickName}</h6>
									</div>
								</div>
								<!-- 사진 추가 아이콘 -->
								<div class="col-lg-6 hidden-sm text-right">
									<a href="javascript:void(0);" class="btn btn-outline-primary"><i
											class="fa fa-image"></i></a>
								</div>
							</div>
						</div>
						<!-- 채팅기록 -->
						<div class="chat-history">
							<ul class="m-b-0">
								<li class="clearfix">
									<div class="message-data text-right">
										<span class="message-data-time">10:10 AM, Today</span>
										<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
									</div>
									<div class="message other-message float-right"> Hi Aiden, how are you? How is the
										project coming along? 
									</div>
								</li>
								<li class="clearfix">
									<div class="message-data">
										<span class="message-data-time">10:12 AM, Today</span>
									</div>
									<div class="message my-message">Are we meeting today?</div>
								</li>
								<li class="clearfix">
									<div class="message-data">
										<span class="message-data-time">10:15 AM, Today</span>
									</div>
									<div class="message my-message">Project has been already finished and I have results
										to show you.</div>
								</li>
							</ul>
						</div>
						
						<!-- 채팅입력 -->
						<div class="chat-message clearfix">
							<div class="input-group mb-0">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fa fa-send"></i></span>
								</div>
								<input type="text" class="form-control" placeholder="Enter text here...">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<c:import url="../temps/footer.jsp"></c:import>
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript"></script>
</body>

</html>