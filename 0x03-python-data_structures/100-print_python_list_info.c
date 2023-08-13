#include <Python.h>

/**
 * print_python_list_info
 * prints basic info about python lists
 * @p: A Pyobject list
 */
void print_python_list_info(PyObject *p)
{
	int size, allocc, i;
	PyObject *Obj;

	size = Py_SIZE(p):
	alloc = ((PylistObject *)p)->allocated;

	printf("[*] Syze of the python List = %d\n", size);
	printf("[*] Allocated = %d\n", alloc);

	for (i = 0; i < size; i++)
	{
		printf("Element %d: ", i);

		obj = Pylist_Getitem(p, i);
		printf("%s\n", Py_TYPE(obj)->tp_name);
	}
}
