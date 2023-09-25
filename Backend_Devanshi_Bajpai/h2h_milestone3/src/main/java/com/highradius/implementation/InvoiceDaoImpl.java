package com.highradius.implementation;

import java.sql.SQLException;
import java.util.List;

import com.highradius.connection.DatabaseConnection;
import com.highradius.model.Invoice;

public class InvoiceDaoImpl implements InvoiceDao {
    private DatabaseConnection databaseConnection;

    public InvoiceDaoImpl() throws SQLException {
        databaseConnection = new DatabaseConnection();
    }

    @Override
    public List<Invoice> getInvoices() throws SQLException {
        return databaseConnection.getInvoices();
    }

    @Override
    public void insertInvoice(Invoice invoice) throws SQLException {
        databaseConnection.addInvoice(invoice);
        System.out.println("Database called: Insert");
    }

    @Override
    public void updateInvoice(int id, Invoice invoice) throws SQLException {
        databaseConnection.updateInvoice(id, invoice);
        System.out.println("Database called: Update");
    }

    @Override
    public void deleteInvoice(int id){
        databaseConnection.deleteInvoice(id);
        System.out.println("Database called: Delete");
    }
    public Invoice getInvoiceByCustomerOrderId(int customerOrderId) throws SQLException {
        return databaseConnection.getInvoiceByCustomerId(customerOrderId);
    }


   

}