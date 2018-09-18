package com.zy.Util;

public class Users {
	
	private Integer userid;
	private String name;
	private String password;
	private String userrole;
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserrole() {
		return userrole;
	}
	public void setUserrole(String userrole) {
		this.userrole = userrole;
	}
	@Override
	public String toString() {
		return "Users [userid=" + userid + ", name=" + name + ", password=" + password + ", userrole=" + userrole + "]";
	}
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Users(Integer userid, String name, String password, String userrole) {
		super();
		this.userid = userid;
		this.name = name;
		this.password = password;
		this.userrole = userrole;
	}
	public Users(String name, String password, String userrole) {
		super();
		this.name = name;
		this.password = password;
		this.userrole = userrole;
	}
	
	
}
