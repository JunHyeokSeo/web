<%--
  Created by IntelliJ IDEA.
  User: jun
  Date: 2023/09/04
  Time: 10:24 AM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--표현식 태그, 값을 브라우저에 출력하기 위한 태그--%>
<%--request - jsp 내장객체의 일종 --%>
<%--post 방식은 한글 전달 과정에서 깨짐 발생. 추가적인 처리 필요--%>
ID: <%=request.getParameter("id")%><br>
PASS: <%=request.getParameter("passwd")%><br>