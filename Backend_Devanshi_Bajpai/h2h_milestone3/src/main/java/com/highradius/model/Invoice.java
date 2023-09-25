package com.highradius.model;

public class Invoice {
	private String DISTRIBUTION_CHANNEL, ORDER_CREATION_DATE, 
			ORDER_CURRENCY;
	private int SALES_ORG, COMPANY_CODE, CUSTOMER_NUMBER;
	int CUSTOMER_ORDER_ID;
	private double  AMOUNT_IN_USD;
	public Invoice() {
	}

	public Invoice(int customer_order_id, int sales_org, String distribution_channel,  int company_code,
			String order_creation_date, String order_currency, int customer_number, double amount_in_usd ) {
		super();

		CUSTOMER_ORDER_ID = customer_order_id;
		SALES_ORG = sales_org;
		DISTRIBUTION_CHANNEL = distribution_channel;
		COMPANY_CODE = company_code;
		ORDER_CREATION_DATE = order_creation_date;
		ORDER_CURRENCY = order_currency;
		CUSTOMER_NUMBER = customer_number;
		AMOUNT_IN_USD = amount_in_usd;
	}

	public String getDISTRIBUTION_CHANNEL() {
		return DISTRIBUTION_CHANNEL;
	}

	public void setDISTRIBUTION_CHANNEL(String distribution_channel) {
		DISTRIBUTION_CHANNEL = distribution_channel;
	}

	public String getORDER_CREATION_DATE() {
		return ORDER_CREATION_DATE;
	}

	public void setORDER_CREATION_DATE(String order_creation_date) {
		ORDER_CREATION_DATE = order_creation_date;
	}

	public String getORDER_CURRENCY() {
		return ORDER_CURRENCY;
	}

	public void setORDER_CURRENCY(String order_currency) {
		ORDER_CURRENCY = order_currency;
	}


	public int getCUSTOMER_ORDER_ID() {
		return CUSTOMER_ORDER_ID;
	}

	public void setCUSTOMER_ORDER_ID(int customerOrderId) {
		CUSTOMER_ORDER_ID = customerOrderId;
	}

	public int getSALES_ORG() {
		return SALES_ORG;
	}

	public void setSALES_ORG(int sales_org) {
		SALES_ORG = sales_org;
	}

	public int getCOMPANY_CODE() {
		return COMPANY_CODE;
	}

	public void setCOMPANY_CODE(int company_code) {
		COMPANY_CODE = company_code;
	}

	
	public int getCUSTOMER_NUMBER() {
		return CUSTOMER_NUMBER;
	}

	public void setCUSTOMER_NUMBER(int customer_number) {
		CUSTOMER_NUMBER = customer_number;
	}

	
	public double getAMOUNT_IN_USD() {
		return AMOUNT_IN_USD;
	}

	public void setAMOUNT_IN_USD(double amount_in_usd) {
		AMOUNT_IN_USD = amount_in_usd;
	}

	

}