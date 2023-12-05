#!/bin/bash
sed -i -e "s/REGISTRY_HOSTNAME/$1/g"  deployment-mdx.yaml
sed -i -e "s/PROJECT/$2/g" deployment-mdx.yaml
sed -i -e "s/TAG_VERSION/$3/g" deployment-mdx.yaml
sed -i -e "s/DEPLOYMENT_NAME/$4/g" deployment-mdx.yaml
sed -i -e "s/PORT_CONTAINER/$5/g" deployment-mdx.yaml
sed -i -e "s/NAMESPACE/$6/g" deployment-mdx.yaml
