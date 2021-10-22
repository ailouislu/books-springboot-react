package com.nzlouis.users.repositories;

import com.nzlouis.users.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

/***
 *  @author Louis
 *  Interface IBooksRepository
 */
public interface IUserRepository extends JpaRepository<User, String> {

}


