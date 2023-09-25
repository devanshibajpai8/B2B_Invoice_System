package com.highradius.connection;

import java.sql.*;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.highradius.model.Invoice;

public class DatabaseConnection {

	private static List<Invoice> invoices;

	public DatabaseConnection() throws SQLException {
	}

	public void addInvoice(Invoice invoice) throws SQLException {
	    // Database connection details
	    String url = "jdbc:mysql://localhost:3306/hrc";
	    String name = "root";
	    String password = "deva@1908";

	    // SQL query to retrieve data
	    try {
	        // Load the MySQL JDBC driver
	        Class.forName("com.mysql.cj.jdbc.Driver");
	    } catch (ClassNotFoundException e) {
	        e.printStackTrace();
	    }
	    try {
	        // Establish the database connection
	        Connection con = DriverManager.getConnection(url, name, password);
	        Statement statement = con.createStatement();
	        String query = "INSERT INTO h2h_oap(CUSTOMER_ORDER_ID, SALES_ORG, 'DISTRIBUTION_CHANNEL', COMPANY_CODE, 'ORDER_CREATION_DATE', 'ORDER_CURRENCY', CUSTOMER_NUMBER, AMOUNT_IN_USD) VALUES ("
	            + invoice.getCUSTOMER_ORDER_ID() + ","
	            + invoice.getSALES_ORG() + ","
	            + "'" + invoice.getDISTRIBUTION_CHANNEL() + "'" + ","
	            + invoice.getCOMPANY_CODE() + ","
	            + "'" + invoice.getORDER_CREATION_DATE() + "'" + ","
	            + "'" + invoice.getORDER_CURRENCY() + "'" + ","
	            + invoice.getCUSTOMER_NUMBER() + ","
	            + invoice.getAMOUNT_IN_USD() + ")";
	        statement.executeUpdate(query);
	        statement.close();
	        con.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}

	public List<Invoice> getInvoices() throws SQLException {
		// Database connection details
		String url = "jdbc:mysql://localhost:3306/hrc"; 
		String name = "root";
		String password = "deva@1908"; 

		// SQL query to retrieve data
		try {
			// Load the MySQL JDBC driver
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		try {
			// Establish the database connection
			Connection con = DriverManager.getConnection(url, name, password);
			Statement statement = con.createStatement();
			invoices = new ArrayList<>();
			String query = "SELECT * FROM h2h_oap LIMIT 10";
			ResultSet result = statement.executeQuery(query);
			// Iterate over the result set and print the data
			while (result.next()) {
			    Invoice invoice = new Invoice();

			    invoice.setCUSTOMER_ORDER_ID(result.getInt("CUSTOMER_ORDER_ID"));
			    // Validate the SALES_ORG value before setting it
			    try {
			        invoice.setSALES_ORG(result.getInt("SALES_ORG"));
			    } catch (NumberFormatException e) {
			        // Handle the case when the SALES_ORG value is not numeric
			        // You can set a default value or perform any other appropriate action
			        invoice.setSALES_ORG(0); // Set a default value, e.g., 0
			    }
			    invoice.setDISTRIBUTION_CHANNEL(result.getString("DISTRIBUTION_CHANNEL"));
			    invoice.setCOMPANY_CODE(result.getInt("COMPANY_CODE"));
			    invoice.setORDER_CREATION_DATE(result.getString("ORDER_CREATION_DATE"));
			    invoice.setORDER_CURRENCY(result.getString("ORDER_CURRENCY"));
			    invoice.setCUSTOMER_NUMBER(result.getInt("CUSTOMER_NUMBER"));
			    // Validate the AMOUNT_IN_USD value before setting it
			    try {
			        invoice.setAMOUNT_IN_USD(result.getDouble("AMOUNT_IN_USD"));
			    } catch (NumberFormatException e) {
			        // Handle the case when the AMOUNT_IN_USD value is not numeric
			        // You can set a default value or perform any other appropriate action
			        invoice.setAMOUNT_IN_USD(0.0); // Set a default value, e.g., 0.0
			    }

			    System.out.println("CUSTOMER_ORDER_ID: " + invoice.getCUSTOMER_ORDER_ID());
			    System.out.println("SALES_ORG: " + invoice.getSALES_ORG());
			    System.out.println("DISTRIBUTION_CHANNEL: " + invoice.getDISTRIBUTION_CHANNEL());
			    System.out.println("COMPANY_CODE: " + invoice.getCOMPANY_CODE());
			    System.out.println("ORDER_CREATION_DATE: " + invoice.getORDER_CREATION_DATE());
			    System.out.println("ORDER_CURRENCY: " + invoice.getORDER_CURRENCY());
			    System.out.println("CUSTOMER_NUMBER: " + invoice.getCUSTOMER_NUMBER());
			    System.out.println("AMOUNT_IN_USD: " + invoice.getAMOUNT_IN_USD());

			    invoices.add(invoice);
			}
			result.close();
			statement.close();
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return invoices;
	}

	public void updateInvoice(int id, Invoice invoice) throws SQLException {
	    // Database connection details
	    String url = "jdbc:mysql://localhost:3306/hrc";
	    String name = "root";
	    String password = "deva@1908";

	    // SQL query to update data
	    try {
	        // Load the MySQL JDBC driver
	        Class.forName("com.mysql.cj.jdbc.Driver");
	    } catch (ClassNotFoundException e) {
	        e.printStackTrace();
	    }

	    try {
	        // Establish the database connection
	        Connection con = DriverManager.getConnection(url, name, password);
	        Statement statement = con.createStatement();
	        String query = "UPDATE h2h_oap SET "
	                + "CUSTOMER_ORDER_ID = " + invoice.getCUSTOMER_ORDER_ID()
	                + ", SALES_ORG = " + invoice.getSALES_ORG()
	                + ", DISTRIBUTION_CHANNEL = '" + invoice.getDISTRIBUTION_CHANNEL() + "'"	               
	                + ", COMPANY_CODE = " + invoice.getCOMPANY_CODE()
	                + ", ORDER_CREATION_DATE = '" + invoice.getORDER_CREATION_DATE() + "'"
	                + ", ORDER_CURRENCY = '" + invoice.getORDER_CURRENCY() + "'"	               
	                + ", CUSTOMER_NUMBER = " + invoice.getCUSTOMER_NUMBER()
	                + ", AMOUNT_IN_USD = " + invoice.getAMOUNT_IN_USD()
	                + " WHERE ID = " + id;
	        statement.executeUpdate(query);
	        statement.close();
	        con.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}
	public void deleteInvoice(int id){
	    // Database connection details
	    String url = "jdbc:mysql://localhost:3306/hrc";
	    String name = "root";
	    String password = "deva@1908";

	    // SQL query to delete data
	    try {
	        // Load the MySQL JDBC driver
	        Class.forName("com.mysql.cj.jdbc.Driver");
	    } catch (ClassNotFoundException e) {
	        e.printStackTrace();
	    }

	    try {
	        // Establish the database connection
	        Connection con = DriverManager.getConnection(url, name, password);
	        Statement statement = con.createStatement();
	        String query = "DELETE FROM h2h_oap WHERE ID = " + id;
	        statement.executeUpdate(query);
	        statement.close();
	        con.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}
	
	public Invoice getInvoiceByCustomerId(int customerId) throws SQLException {
	    // Database connection details
	    String url = "jdbc:mysql://localhost:3306/hrc";
	    String name = "root";
	    String password = "deva@1908";

	    // SQL query to retrieve data
	    try {
	        // Load the MySQL JDBC driver
	        Class.forName("com.mysql.cj.jdbc.Driver");
	    } catch (ClassNotFoundException e) {
	        e.printStackTrace();
	    }

	    try {
	        // Establish the database connection
	        Connection con = DriverManager.getConnection(url, name, password);
	        Statement statement = con.createStatement();
	        String query = "SELECT * FROM h2h_oap WHERE CUSTOMER_ORDER_ID = " + customerId;
	        ResultSet result = statement.executeQuery(query);

	        // Check if the result set is empty
	        if (result.next()) {
	            // Create a new Invoice object
	            Invoice invoice = new Invoice();
	            invoice.setCUSTOMER_ORDER_ID(result.getInt(2));
	            invoice.setSALES_ORG(result.getInt(3));
	            invoice.setDISTRIBUTION_CHANNEL(result.getString(4));
	            invoice.setCOMPANY_CODE(result.getInt(5));
	            invoice.setORDER_CREATION_DATE(result.getString(6));
	            invoice.setORDER_CURRENCY(result.getString(7));
	            invoice.setCUSTOMER_NUMBER(result.getInt(8));
	            invoice.setAMOUNT_IN_USD(result.getDouble(9));

	            result.close();
	            statement.close();
	            con.close();

	            return invoice;
	        } else {
	            // No invoice found with the given customer ID
	            result.close();
	            statement.close();
	            con.close();
	            return null;
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	        return null;
	    }
	}



}