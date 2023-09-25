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

@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private InvoiceDaoImpl invoiceDaoImpl;

    public EditServlet() {
        super();
        System.out.println("EditServlet Const Called");
        try {
            invoiceDaoImpl = new InvoiceDaoImpl();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            // Retrieve data from request parameters
            int customerOrderId = Integer.parseInt(request.getParameter("CUSTOMER_ORDER_ID"));
            
            // Get the existing invoice from the database based on the customer order ID
            Invoice existingInvoice = invoiceDaoImpl.getInvoiceByCustomerOrderId(customerOrderId);

            if (existingInvoice != null) {
                // Update the invoice data

                // Update the invoice in the database using the InvoiceDaoImpl
                invoiceDaoImpl.updateInvoice(existingInvoice.getCUSTOMER_ORDER_ID(), existingInvoice);

                // Send a response back
                response.setContentType("application/json");
                PrintWriter out = response.getWriter();
                out.println("Data of invoice with Customer Order ID " + customerOrderId + " updated in the database successfully.");
                out.close();
            } else {
                response.setContentType("application/json");
                PrintWriter out = response.getWriter();
                out.println("Invoice with Customer Order ID " + customerOrderId + " does not exist in the database.");
                out.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}