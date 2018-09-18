package com.zy.Tool;

import org.junit.Test;

public class TestDemo {
	

	@Test
	public void testOne(){
		
		
		int a=Common.usd.checkUserLogin("admin", "admin");
		System.out.println(a);
		
	}
	

	@Test
	public void testTwo(){
		
		
		int a=Common.usd.allCount();
		System.out.println(a);
		
	}

	@Test
	public void testThree(){
		
		
		int a=Common.usd.updateProductName(2,"222222");
		System.out.println(a);
		
	}

	@Test
	public void test5(){
		
		
		int a=Common.psd.Ic_Card_AllMoney();
		System.out.println(a);
		
	}


}
