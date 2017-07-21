package Directory.Service;


import Directory.Entity.Person;

import java.util.List;

public interface PersonService {


    List<Person> findAll();

    Person findOne(String Id);

    Person create(Person person);

    Person update(String Id, Person person);

    void delete(String Id);
}
