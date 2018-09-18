package com.zy.DaoImpl;

import java.util.List;

import com.zy.Dao.UserInfoDao;
import com.zy.Tool.Common;
import com.zy.Util.Product;
import com.zy.Util.Users;

public class UserInfoDaoImpl implements UserInfoDao {

	@Override
	public int checkUserLogin(String name, String password) {
		String sql="select userid from t_users where name=? and password=?";
		List<Users> list=Common.UTIL.query(sql, new Object[]{name,password}, Users.class);
		int a=1;
		if(list.size()==0 || list.equals(null)){
			a=0;
		}
		return a;
	}

	@Override
	public List<Users> findSort() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> showProductList(int pageNo,int pageCount ) {
		String sql="select * from t_selling_list limit "+pageNo*pageCount+","+pageCount+"";
		@SuppressWarnings("unchecked")
		List<Product> list=Common.UTIL.query(sql, null, Product.class);
		if(list.size()==0&&list.equals(null)){
			return null;
		}
		return list;
	}

	@Override
	public int allCount() {
		
		String sql="select COUNT(sellingid) from t_selling_list";
		int a=Common.UTIL.sqlCount(sql);
		
		return a;
	}

	@Override
	public int updateProductName(int sellingid,String name) {
		String sql="update t_selling_list set name=? where sellingid=? ";
		int a=Common.UTIL.getRes(sql, new Object[]{name,sellingid});
		return a;
	}

	@Override
	public int delProductById(int sellingid) {
		String sql="delete from t_selling_list where sellingid=?";
		int a=Common.UTIL.getRes(sql, new Object[]{sellingid});
		return a;
	}

	@Override
	public int updateNumByName(int num,String name) {
		
		String sql="update t_selling_list set number=? where name=?";
		int a=Common.UTIL.getRes(sql, new Object[]{num,name});
		return a;
	}
	
	
	

}
