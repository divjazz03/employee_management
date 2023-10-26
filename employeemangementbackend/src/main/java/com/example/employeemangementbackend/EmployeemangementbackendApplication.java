package com.example.employeemangementbackend;

import com.example.employeemangementbackend.model.Employee;
import com.example.employeemangementbackend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeemangementbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeemangementbackendApplication.class, args);
	}


}
