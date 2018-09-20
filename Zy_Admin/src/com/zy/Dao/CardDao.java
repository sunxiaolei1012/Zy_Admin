package com.zy.Dao;

import java.util.List;

import com.zy.Util.Card;


public interface  CardDao {
	
	
/**
 *展示全部卡分类
 * @return
 */
	public List<Card> showCardType();
/**
 * 当天售卡记录
 */
	public List<Card> showCardByTime();
	
	
	
	public  int addCard(Card card);
/**
 * 判断卡号是否存在
 */
	public int checkCardId(String number);
	
/**
 * StringBuffer 条件分页查询 sql
 */
	public List<Card> select_card(String sql);
	
	/**
	 * 卡总条数	
	 */
		public int allCount();
/**
 * 查询区间段 ic卡销售金额
 */
  public  List<Card>  icCount(String begintime,String endtime);
  		
	
}
