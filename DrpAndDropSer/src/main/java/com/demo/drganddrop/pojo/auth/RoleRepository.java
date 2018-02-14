package com.demo.drganddrop.pojo.auth;

import com.demo.drganddrop.pojo.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}