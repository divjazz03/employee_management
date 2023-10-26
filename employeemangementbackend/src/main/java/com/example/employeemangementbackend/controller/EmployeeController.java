package com.example.employeemangementbackend.controller;

import com.example.employeemangementbackend.exception.ResourceNotFound;
import com.example.employeemangementbackend.model.Employee;
import com.example.employeemangementbackend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    // get employee by its id value
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Employee does not exist"));
        return ResponseEntity.ok(employee);
    }

    // build update employee
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails){
        Employee updateEmployee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFound("Employee with id: " + id + " not found"));
        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setEmail(employeeDetails.getEmail());
        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    @DeleteMapping("{id}")
    public void deleteEmployeeById(@PathVariable long id){
        employeeRepository.deleteById(id);
    }



}
