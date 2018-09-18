package com.zy.Dao;

import java.util.List;

import com.zy.Util.Product;
import com.zy.Util.Users;
/**
 *用户登陆注册
 * @author sxl666
 *
 */

public interface UserInfoDao {
//用户登陆
	public int checkUserLogin(String name,String password);
	
	
/**
 * 商品总条数	
 */
	public int allCount();
	
/** 
 * 根据商品sellingid删除商品
 * 
 */
	public int delProductById(int sellingid);
/**
 * 根据商品名称 更改商品数量
 */
	
	public int updateNumByName(int num,String name);
	
	
	
/**	
 * 根据商品sellingid修改商品名称 
 */
	
	public int updateProductName(int sellingid,String name);
	
	
	
/***
 * 查询所有商品信息
 * @return
 */
	
	public List<Product> showProductList(int pageNo,int pageCount);
	
	
	
	
	//
	public   List<Users> findSort();

}
