package Directory.Repository;

import Directory.Entity.Person;

import java.util.List;

public interface PersonRepository {


    List<Person> findAll();

    Person findOne(String Id);

    Person findByPhone(String phoneNumber);

    Person create(Person person);

    Person update(Person person);

    void delete(Person person);
}
