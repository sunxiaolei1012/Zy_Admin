package com.zy.Tool;

import java.text.SimpleDateFormat;
import java.util.Properties;

import com.zy.Dao.ProductDao;
import com.zy.Dao.UserInfoDao;
import com.zy.DaoImpl.ProductDaoImpl;

import com.zy.DaoImpl.UserInfoDaoImpl;

/**
 *甯搁噺
 * @author cyb
 *
 */
public class Common {

	
	static Properties pros = null;  
	static {  
			pros = new Properties();
	try {
		pros.load(Thread.currentThread().getContextClassLoader().getResourceAsStream("config.properties"));
		
		} catch (Exception e) {
		e.printStackTrace();
		}
	}
	 static final String DRIVER=pros.getProperty("driver");
	 static final String URL=pros.getProperty("url");
	 static final String USERNAME=pros.getProperty("user");
	 static final String PASSWORD=pros.getProperty("password");
	 
	 public static final Util UTIL = new Util();
	 public static final UserInfoDao usd=new UserInfoDaoImpl();
	 public static final ProductDao psd=new ProductDaoImpl();
	 public static final JDBC JD = new JDBC();
	 public static final Gsons gson = new Gsons();
	 public static final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
	 
}
