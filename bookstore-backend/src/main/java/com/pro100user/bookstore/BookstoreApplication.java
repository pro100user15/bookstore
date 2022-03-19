package com.pro100user.bookstore;

import com.pro100user.bookstore.config.AppConfig;
import com.pro100user.bookstore.model.Category;
import com.pro100user.bookstore.service.CategoryService;
import com.pro100user.bookstore.service.impl.CategoryServiceImpl;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

public class BookstoreApplication {

	public static void main(String[] args) {
//		Configuration configuration = new Configuration();
//
//		configuration.configure();
//
//		SessionFactory sessionFactory = configuration.buildSessionFactory();

//		CategoryService categoryService = new CategoryServiceImpl(new CategoryRepositoryImpl(sessionFactory));
//
//		Category category = new Category();
//		category.setName("Фантастика");

		//categoryService.create(category);

//		category = categoryService.readById(3L);

//		categoryService.update(category);
//
//
//		categoryService.delete(category);

//		AuthorRepository authorRepository = new AuthorRepositoryImpl(sessionFactory);

//		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
//		CategoryService categoryService = context.getBean(CategoryServiceImpl.class);

		AbstractApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

//		CategoryController controller = context.getBean(CategoryController.class);
//
//		System.out.println(controller.categories().toString());

		CategoryService categoryService = context.getBean(CategoryServiceImpl.class);

//		categoryService.create(category);

//		for(CategoryDTO value : controller.categories().getBody())
//			System.out.println(value.toString());
//
		for(Category value : categoryService.getAll())
			System.out.println(value.getName());
	}
}
