package com.zy.Util;

public class ProductSort {
	
	
	private Integer type_id;
	private String type_name;
	public Integer getType_id() {
		return type_id;
	}
	public void setType_id(Integer type_id) {
		this.type_id = type_id;
	}
	public String getType_name() {
		return type_name;
	}
	public void setType_name(String type_name) {
		this.type_name = type_name;
	}
	@Override
	public String toString() {
		return "ProductSort [type_id=" + type_id + ", type_name=" + type_name + ", getType_id()=" + getType_id()
				+ ", getType_name()=" + getType_name() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	public ProductSort(Integer type_id, String type_name) {
		super();
		this.type_id = type_id;
		this.type_name = type_name;
	}
	public ProductSort() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
