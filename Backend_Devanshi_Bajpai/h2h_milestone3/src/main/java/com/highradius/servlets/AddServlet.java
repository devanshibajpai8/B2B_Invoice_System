package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;

@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private InvoiceDaoImpl invoiceDaoImpl;

    public AddServlet() {
        super();
        System.out.println("AddServlet Const Called");
        try {
            invoiceDaoImpl = new InvoiceDaoImpl();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.println("This servlet only supports POST requests.");
        out.close();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String distributionChannel = request.getParameter("DISTRIBUTION_CHANNEL");
            String orderCreationDate = request.getParameter("ORDER_CREATION_DATE");
            String orderCurrency = request.getParameter("ORDER_CURRENCY");
            int customerOrderId = Integer.parseInt(request.getParameter("CUSTOMER_ORDER_ID"));
            int salesOrg = Integer.parseInt(request.getParameter("SALES_ORG"));
            int companyCode = Integer.parseInt(request.getParameter("COMPANY_CODE"));
            int customerNumber = Integer.parseInt(request.getParameter("CUSTOMER_NUMBER"));
            double amountInUSD = Double.parseDouble(request.getParameter("AMOUNT_IN_USD"));
            

            Invoice invoice = new Invoice();
            invoice.setDISTRIBUTION_CHANNEL(distributionChannel);
            invoice.setORDER_CREATION_DATE(orderCreationDate);
            invoice.setORDER_CURRENCY(orderCurrency);
            invoice.setCUSTOMER_ORDER_ID(customerOrderId);
            invoice.setSALES_ORG(salesOrg);
            invoice.setCOMPANY_CODE(companyCode);
            invoice.setCUSTOMER_NUMBER(customerNumber);
            invoice.setAMOUNT_IN_USD(amountInUSD);
            invoiceDaoImpl.insertInvoice(invoice);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.println("Data added successfully.");
        out.close();
    }
}