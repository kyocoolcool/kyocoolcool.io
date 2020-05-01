---
template: SinglePost
title: JSP Custom Tag
status: Featured / Published
date: '2018-10-15'
featuredImage: >-
  https://raw.githubusercontent.com/kyocoolcool/kyocoolcool.io/master/static/images/logo/jsp.png
excerpt: >-
  JSP 自訂標籤.
meta:
  canonicalLink: ''
  description: JSP自定義標籤使用方法，自己的標籤自己建。
  noindex: false
  title: JSP Custom Tag
---
##操作流程

###建立 mytaglib.tld  
>放置路徑Web-INF/tags/mytaglib.tld
```tld
<?xml version="1.0" encoding="UTF-8"?>

<taglib xmlns="http://java.sun.com/xml/ns/javaee"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-jsptaglibrary_2_1.xsd"
        version="2.1">

    <tlib-version>1.0</tlib-version>
    <short-name>mytaglib</short-name>
    <uri>ggg</uri>//自定義URI唯一值(JSP導入tld 的URI為此值)

    <!-- Invoke 'Generate' action to add tags or functions -->
    <tag>
        <name>helloWorld</name>//基本文字標籤
        <tag-class>tag.HelloWorldTag</tag-class>
        <body-content>empty</body-content>
    </tag>
    <tag>
        <name>dynaAttr</name>//動態標籤
        <tag-class>tag.DynaAttributeTag</tag-class>
        <body-content>empty</body-content>
        <dynamic-attributes>true</dynamic-attributes>
    </tag>
</taglib>
```

###建立 HelloWorldTag.java
>放置路徑sec/tag/HelloWorldTag.java
```java
//繼承SimpleTagSupport 改寫doTag()
public class HelloWorldTag extends SimpleTagSupport {
    @Override
    public void doTag() throws JspException, IOException {
    getJspContext().getOut().write("Hello World "+new java.util.Date());
    }
}
```

###建立 DynaAttributeTag.java
>放置路徑sec/tag/DynaAttributeTag.java
```java
//extends SimpleTagSupport 改寫doTag() implements DynamicAttributes 改寫 setDynamicAttribute()
public class DynaAttributeTag extends SimpleTagSupport implements DynamicAttributes {
    private ArrayList<String> keys=new ArrayList<String>();
    private ArrayList<Object> values=new ArrayList<Object>();
    @Override
    public void doTag() throws JspException, IOException {
        JspWriter out =getJspContext().getOut();
        out.print("<ol>");
        for(int i=0;i<keys.size();i++){
            String key=keys.get(i);
            Object value=values.get(i);
            out.print("<li>"+key+"="+value+"</li>");
        }
        out.print("</ol");
    }
    @Override
    public void setDynamicAttribute(String uri, String localName, Object value) throws JspException {
        keys.add(localName);
        values.add(value);
    }
}
```

###建立 helloWorldTag.jsp
```java
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="mytag" uri="ggg" %>//參照tld的URI
<html>
<head>
    <title>Hello World</title>
</head>
<body>
<mytag:helloWorld/>
</body>
</html>
```

###建立 dynaAttr.jsp
```java
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="mytag" uri="ggg" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h2>下面顯示自訂義Tag內容</h2>
<h4>指令兩個屬性</h4>
<mytag:dynaAttr name="Chris" url="www.chris.com.tw"/>
<h4>指令四個屬性</h4>
<mytag:dynaAttr 書名="Java講義"  價格="99元" 出版時間="2018年10月14日" 描述="Java教學書" />
</body>
</html>
```

###設置Web.xml
>此部分必須設定否則會出現500 not found mytaglib
```xml
<jsp-config>
        <taglib>
            <taglib-uri>ggg</taglib-uri>
            <taglib-location>/WEB-INF/tags/mytaglib.tld</taglib-location>
        </taglib>
</jsp-config>
```

###運行效果
![post-1](/static/images/post/20181015/20181015-post-1.png)  

![post-2](/static/images/post/20181015/20181015-post-2.png)
