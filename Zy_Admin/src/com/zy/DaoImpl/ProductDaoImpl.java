package com.zy.DaoImpl;

import java.util.List;

import com.zy.Dao.ProductDao;

import com.zy.Tool.Common;
import com.zy.Util.Order;
import com.zy.Util.Product;
import com.zy.Util.ProductSort;
import com.zy.Util.Users;

public class ProductDaoImpl implements ProductDao {

	@Override
	public List<ProductSort> show_productSort() {
		String sql = "select type_id, type_name from t_selling_type ";
		List<ProductSort> list=Common.UTIL.query(sql, null, ProductSort.class);
		return list;
	}

	@Override
	public int add_productSort(String name) {
		String sql ="insert into t_selling_type set type_name=? ";
		int a=Common.UTIL.getRes(sql, new Object[]{name});
		
		return a;
	}

	@Override
	public int del_productSort(int type_id) {
		String sql="delete from t_selling_type where type_id=?";
		int a=Common.UTIL.getRes(sql, new Object[]{type_id});
		return a;
	}

	@Override
	public List<Product> show_sortProduct(int sellingid) {
		String sql="select * from t_selling_list where typeid=?";
		List<Product> list=Common.UTIL.query(sql, new Object[]{sellingid}, Product.class);
		
 		return list;
	}

	@Override
	public int Ic_Card_AllMoney() {
		String sql="select SUM(pay_price) from t_order where   date(ordertime) = curdate(); ";
	      int a=Common.UTIL.sqlCount(sql);
		
		
		return a;
	}

	
	@Override
	public int check_pname(String name) {
		
		String sql="select * from t_selling_list where name=? ";
			List<Product> list =Common.UTIL.query(sql, new Object[]{name},Product.class);
			if(list != null && list.size()>0)
				return 1;
		return 0;
	}

	
	

}
