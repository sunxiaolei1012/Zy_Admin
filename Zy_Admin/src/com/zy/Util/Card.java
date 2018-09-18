package com.zy.Util;

public class Card {
	private Integer ctid;
	private String cardtype;
	private String rebate;
	public Integer getCtid() {
		return ctid;
	}
	public void setCtid(Integer ctid) {
		this.ctid = ctid;
	}
	public String getCardtype() {
		return cardtype;
	}
	public void setCardtype(String cardtype) {
		this.cardtype = cardtype;
	}
	public String getRebate() {
		return rebate;
	}
	public void setRebate(String rebate) {
		this.rebate = rebate;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cardtype == null) ? 0 : cardtype.hashCode());
		result = prime * result + ((ctid == null) ? 0 : ctid.hashCode());
		result = prime * result + ((rebate == null) ? 0 : rebate.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Card other = (Card) obj;
		if (cardtype == null) {
			if (other.cardtype != null)
				return false;
		} else if (!cardtype.equals(other.cardtype))
			return false;
		if (ctid == null) {
			if (other.ctid != null)
				return false;
		} else if (!ctid.equals(other.ctid))
			return false;
		if (rebate == null) {
			if (other.rebate != null)
				return false;
		} else if (!rebate.equals(other.rebate))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Card [ctid=" + ctid + ", cardtype=" + cardtype + ", rebate=" + rebate + "]";
	}
	public Card() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Card(Integer ctid, String cardtype, String rebate) {
		super();
		this.ctid = ctid;
		this.cardtype = cardtype;
		this.rebate = rebate;
	}
	
	

}
