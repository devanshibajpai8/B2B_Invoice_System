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

@WebServlet("/DeleteServlet")
public class DeleteServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private InvoiceDaoImpl invoiceDaoImpl;

    public DeleteServlet() {
        super();
        System.out.println("DeleteServlet Constructor Called");
        try {
            invoiceDaoImpl = new InvoiceDaoImpl();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
      
            // Retrieve the customer ID from the request parameter
            int customerID = Integer.parseInt(request.getParameter("customerID"));

            // Delete the invoice based on the customer ID using the InvoiceDaoImpl
            invoiceDaoImpl.deleteInvoice(customerID);

            // Send a response back
            response.setContentType("text/plain");
            PrintWriter out = response.getWriter();
            out.println("Invoices for customer with ID " + customerID + " deleted from the database successfully.");
            out.close();
    }
}