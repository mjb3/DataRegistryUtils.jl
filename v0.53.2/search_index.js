var documenterSearchIndex = {"docs":
[{"location":"SEIRS/#SEIRS-model-example","page":"SEIRS model example","title":"SEIRS model example","text":"","category":"section"},{"location":"SEIRS/","page":"SEIRS model example","title":"SEIRS model example","text":"This is the updated manual for the upcoming FAIR interfaced version of the Data Registry package.","category":"page"},{"location":"SEIRS/","page":"SEIRS model example","title":"SEIRS model example","text":"print(pwd())","category":"page"},{"location":"SEIRS/","page":"SEIRS model example","title":"SEIRS model example","text":"show(run(`ls`))","category":"page"},{"location":"SEIRS/","page":"SEIRS model example","title":"SEIRS model example","text":"cd(\"/home/runner/work/DataPipeline.jl/DataPipeline.jl\")\nprint(pwd())\nshow(run(`fair init --ci`))","category":"page"},{"location":"SEIRS/","page":"SEIRS model example","title":"SEIRS model example","text":"print(pwd())\nread(`fair pull /home/runner/work/DataPipeline.jl/DataPipeline.jl/examples/fdp/SEIRSconfig.yaml`, String)","category":"page"},{"location":"SEIRS/","page":"SEIRS model example","title":"SEIRS model example","text":"dsf","category":"page"},{"location":"SEIRS/","page":"SEIRS model example","title":"SEIRS model example","text":"show(run(`fair run /home/runner/work/DataPipeline.jl/DataPipeline.jl/examples/fdp/SEIRSconfig.yaml`))","category":"page"},{"location":"fdp_manual/#FAIR-data-pipeline-manual","page":"FAIR data pipeline manual","title":"FAIR data pipeline manual","text":"","category":"section"},{"location":"fdp_manual/","page":"FAIR data pipeline manual","title":"FAIR data pipeline manual","text":"This is the manual for the upcoming FAIR DataPipeline package.","category":"page"},{"location":"fdp_manual/","page":"FAIR data pipeline manual","title":"FAIR data pipeline manual","text":"Pages = [\"fdp_manual.md\"]\nDepth = 3","category":"page"},{"location":"fdp_manual/#Managing-code-runs","page":"FAIR data pipeline manual","title":"Managing code runs","text":"","category":"section"},{"location":"fdp_manual/","page":"FAIR data pipeline manual","title":"FAIR data pipeline manual","text":"initialise\nfinalise","category":"page"},{"location":"fdp_manual/#DataPipeline.initialise","page":"FAIR data pipeline manual","title":"DataPipeline.initialise","text":"initialise(config_file, submission_script)\n\nReads in  working config.yaml file, generates a new Code Run entry, and returns a  DataRegistryHandle containing various metadata.\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#DataPipeline.finalise","page":"FAIR data pipeline manual","title":"DataPipeline.finalise","text":"finalise(handle)\n\nComplete (i.e. finish) code run.\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#Reading-data","page":"FAIR data pipeline manual","title":"Reading data","text":"","category":"section"},{"location":"fdp_manual/","page":"FAIR data pipeline manual","title":"FAIR data pipeline manual","text":"read_array\nread_table\nread_estimate\nread_distribution\nlink_read","category":"page"},{"location":"fdp_manual/#DataPipeline.read_array","page":"FAIR data pipeline manual","title":"DataPipeline.read_array","text":"read_array(handle, data_product[, component])\n\nRead [array] data product.\n\nnote that it must already have been downloaded from the remote data store using fdp pull.\nthe latest version of the data is read unless otherwise specified.\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#DataPipeline.read_table","page":"FAIR data pipeline manual","title":"DataPipeline.read_table","text":"read_table(handle, data_product[, component])\n\nRead [table] data product.\n\nnote that it must already have been downloaded from the remote data store using  fdp pull.\nthe latest version of the data is read unless otherwise specified.\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#DataPipeline.read_estimate","page":"FAIR data pipeline manual","title":"DataPipeline.read_estimate","text":"read_estimate(handle, data_product, [component])\n\nRead TOML-based data product.\n\nnote that it must already have been downloaded from the remote data store using  fdp pull.\nthe specific version can be specified in the config file (else the latest version is  used.)\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#DataPipeline.read_distribution","page":"FAIR data pipeline manual","title":"DataPipeline.read_distribution","text":"readdistribution(handle, dataproduct, [component])\n\nRead TOML-based data product.\n\nnote that it must already have been downloaded from the remote data store using  fdp pull.\nthe specific version can be specified in the config file (else the latest version is  used.)\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#Writing-data","page":"FAIR data pipeline manual","title":"Writing data","text":"","category":"section"},{"location":"fdp_manual/","page":"FAIR data pipeline manual","title":"FAIR data pipeline manual","text":"write_array\nwrite_table\nwrite_estimate\nwrite_distribution\nlink_write","category":"page"},{"location":"fdp_manual/#DataPipeline.write_array","page":"FAIR data pipeline manual","title":"DataPipeline.write_array","text":"write_array(handle, data, data_product, component)\n\nWrite an array as a component to an hdf5 file.\n\nSee also: write_table, read_array, read_table\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#DataPipeline.write_table","page":"FAIR data pipeline manual","title":"DataPipeline.write_table","text":"write_table(handle, data, data_product, component)\n\nWrite a table as a component to an hdf5 file.\n\nSee also: write_array, read_array, read_table\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#DataPipeline.write_estimate","page":"FAIR data pipeline manual","title":"DataPipeline.write_estimate","text":"write_estimate(handle, value, data_product, component)\n\nWrite a point estimate as a component to a toml file.\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#DataPipeline.write_distribution","page":"FAIR data pipeline manual","title":"DataPipeline.write_distribution","text":"write_distribution(handle, distribution, parameters, data_product, component)\n\nWrite a distribution as a component to a toml file.\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#Raising-issues","page":"FAIR data pipeline manual","title":"Raising issues","text":"","category":"section"},{"location":"fdp_manual/","page":"FAIR data pipeline manual","title":"FAIR data pipeline manual","text":"raise_issue","category":"page"},{"location":"fdp_manual/#DataPipeline.raise_issue","page":"FAIR data pipeline manual","title":"DataPipeline.raise_issue","text":"raise_issue(handle; ... )\n\nRegister issue with data product; component; external object; or script.\n\nPass the object URI as a named parameter[s], e.g. raise_issue(handle; data_product=dp,  component=comp).\n\nOptional parameters\n\ndata_product\ncomponent\nexternal_object\nscript\n\n\n\n\n\n","category":"function"},{"location":"fdp_manual/#Index","page":"FAIR data pipeline manual","title":"Index","text":"","category":"section"},{"location":"fdp_manual/","page":"FAIR data pipeline manual","title":"FAIR data pipeline manual","text":"Pages = [\"fdp_manual.md\"]","category":"page"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"note: Note\nSee here for the main FAIR Data Pipeline documentation, and information about the SCRC. This website is for the Julia package only.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"DataPipeline.jl  -  the Julia implementation of the FAIR Data Pipeline","category":"page"},{"location":"#What-is-the-FAIR-Data-Pipeline?","page":"Introduction","title":"What is the FAIR Data Pipeline?","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The FAIR Data Pipeline can be understood by considering the central kernel of its technological implementation: the Data Registry (DR). Essentially it consists of a relational database, and a RESTful API for reading and writing to the database.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The database schema (as illustrated below) is detailed, but key entity types of relevance here include:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Data Products - metadata, or information about data 'products'. To elaborate: a data product typically includes a link to, e.g. a table of scientific data, but [for the most part] the underlying data is not actually stored in the DR. This may appear at first glance to be a limitation but there is a key benefit to the approach which is discussed briefly in due course.\nCode Repo Releases - i.e. 'models', or a given version of some code that implements, e.g. a statistical model.\nCode runs - or model runs, such as the output from a single realisation of the model.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Thus, the Code Repo (and Release) relating to a given statistical model, may be associated with a number of Code Runs, which in turn may be associated with a number of Data Products (as 'inputs' and 'outputs'.)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"In summary the data pipeline provides both a centralised repository for [meta]data, and a means of tracking the full history of COVID-related modelling outputs, including data and other inputs, such as the random seed used to generate a particular realisation of a given model.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The resulting 'audit trail' can thus provide transparency, and greatly improve the reproducibility, of published scientific research, even where the models and data used to produce them are complex or sophisticated.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Note that as a working process the pipeline is somewhat cyclical in nature: model outputs can be used to provide inputs for other models, and so on. Thus the audit capabilities of the pipeline process are not limited to individual research projects, models or datasets - it naturally extends to a sequence of ongoing projects, possibly produced by different users and teams ('groups' in the DR.)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"In other words, it mirrors the way in which scientific research in general is published, whilst providing a robust solution to vitally important current challenges far beyond the fields of public health and epidemiology, such as reproducibility and transparency.","category":"page"},{"location":"#The-Data-Registry","page":"Introduction","title":"The Data Registry","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"As with the pipeline itself, a key design strength of the Data Registry (DR) is its 'agnosticism'. That is, it is agnostic with respect to both programming languages and [the format of] datasets. Thus, it is compatible even with those that have not been invented yet.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Whilst this is a key strength, it does impose certain constraints on the functionality that can be provided directly within the framework of the DR itself. For example, in order to provide features such as file processing (necessary for the automated import of Data Products from the DR) it is necessary to know the file format in advance. This is also true of data processing in general: in order to do any kind of meaningful data processing, we must know both the structure of a given type of dataset, and how to recognise it in practice.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"For that reason, features such as these are instead provided by what can be regarded as an 'automation layer', a set of utility-like software packages (such as this one) and tools that comprise an important layer of the pipline's software ecosystem, because they make it possible for model developers to download data, and otherwise meaningfully interact with the SCRC pipeline process using only a few lines of code.","category":"page"},{"location":"#Data-Registry-schema","page":"Introduction","title":"Data Registry schema","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"<img src=\"https://data.fairdatapipeline.org/static/images/schema.svg\" alt=\"Data Registry\" schema=\"height: 80px;\"/>","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Hint: click here to expand the image.","category":"page"},{"location":"#What-does-this-package-do?","page":"Introduction","title":"What does this package do?","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Similar to the R and the python FAIR Data Pipeline API implementations, this package provides a language-specific automation layer [for the language-agnostic RESTful API that is used to interact with the DR.] It also handles the downloading (and pre-processing) of Data Products based on that [meta]data.","category":"page"},{"location":"#Getting-started","page":"Introduction","title":"Getting started","text":"","category":"section"},{"location":"#Package-installation","page":"Introduction","title":"Package installation","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The package is not currently registered and must be added via the package manager Pkg. From the REPL type ] to enter Pkg mode and run:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"pkg> add https://github.com/FAIRDataPipeline/DataPipeline.jl","category":"page"}]
}
