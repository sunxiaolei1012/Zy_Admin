package com.zy.Dao;

import java.util.List;

import com.zy.Util.Product;
import com.zy.Util.ProductSort;
/**
 *用户登陆注册
 * @author sxl666
 *
 */




public interface ProductDao {
	
	
/**  
* 修改商品名称时 验证是否重名 
*
*/
	public int check_pname(String name);

	
/***
 * 查看商品的分类
 * 
 */
	
	public List<ProductSort> show_productSort();
/**
 * 添加商品分类
 * 	
 */
	public int add_productSort(String name);
	
/***
 * 查看商品类别包含的商品
 */
	public List<Product>  show_sortProduct( int sellingid);
	
/***
 * 删除商品类型By type_id
 * 
 */
	public int del_productSort(int type_id);
	
/***
 * 查询当天IC卡消费总金额
 * 	
 */
	public int Ic_Card_AllMoney ();
}
