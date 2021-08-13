package com.example.demo.service;

import com.example.demo.model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();

    Employee save(Employee employee);

    Employee findById(Long id);

    void delete(Employee employee);

}
