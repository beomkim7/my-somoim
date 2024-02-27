package com.somoim.app.chat;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.somoim.app.member.MemberDTO;
import com.somoim.app.member.MemberService;
import com.somoim.app.moim.MoimDTO;

@Controller
//@RequestMapping("/chat/*")
public class ChatController {

	@Autowired
	private MemberService memberService;

	@Autowired
	private ChatMessageService chatMessageService;

	@GetMapping("/chat")
	public ModelAndView chat(HttpSession session,ChatMessageDTO chatMessageDTO, MemberDTO memberDTO, ModelAndView mv) throws Exception{
		if(session.getAttribute("member") == null) {
			mv.setViewName("/member/login");
			return mv;
		}
		
		memberDTO = (MemberDTO)session.getAttribute("member");
		MemberDTO dto = memberService.getLogin(memberDTO);
		
		mv.addObject("roomNum",session.getAttribute("roomNum"));
		System.out.println(mv.getModelMap());
//		List<ChatMessageDTO> chatHistory = chatMessageService.chatHistory(chatMessageDTO);
//		mv.addObject("chatHistory", chatHistory);

//		chatMessageDTO.setChatRoomNum((Long)session.getAttribute("roomNum"));
//		System.out.println(chatMessageDTO.getChatRoomNum());
//		System.out.println(chatMessageDTO.getUserName());
//		MoimDTO moimChat = chatMessageService.moimChat(chatMessageDTO);
//		System.out.println(moimChat.getMoimName());
//		mv.addObject("moimChat",moimChat);

		
		List<MoimDTO> moimChatInfo = chatMessageService.moimChatInfo(dto);
		System.out.println(moimChatInfo.get(0).toString());
		
		mv.addObject("moimInfo", moimChatInfo);
		
		List<Long> chatRoomList = chatMessageService.chatRoomList(dto);
		mv.addObject("chatRoomList", chatRoomList);
				
		mv.addObject("user",dto);
		mv.setViewName("/chat/chating");
		return mv;
	}
	
	@GetMapping("/chat/room")
	@ResponseBody
	public Map<String, Object> chatRecord(HttpSession session, ChatMessageDTO chatMessageDTO, Model model) {
		session.setAttribute("roomNum", chatMessageDTO.getChatRoomNum());
		List<ChatMessageDTO> chatHistory = chatMessageService.chatHistory(chatMessageDTO);
		
		System.out.println(chatHistory.get(0).getMemberDTO().toString());
		System.out.println(chatHistory.get(0).getProfileDTO().toString());
		// -> jsp
		model.addAttribute("roomNum", chatMessageDTO.getChatRoomNum());
		model.addAttribute("chatHistory", chatHistory);
		// -> js
		Map<String, Object> map = new HashMap<>();
		map.put("record", chatHistory);
		map.put("roomNum", chatMessageDTO.getChatRoomNum());
		return map;
	}
}
